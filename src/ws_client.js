/* globals WebSocket*/
import EventEmitter from 'events';

function ignore() {}

class Socket extends EventEmitter {
    constructor(wsUrl) {
        super();
        this.ws_url = wsUrl;
        this.is_connected = false;
        this.is_connecting = false;
        this.socket = undefined;
        this.connect();
    }

    connect() {
        if (this.is_connecting) {
            return;
        }
        if (this.is_connected) {
            this.disconnect();
        }
        this.is_connecting = true;
        const socket = new WebSocket(this.ws_url);
        socket.onopen = () => {
            this.socket.onopen = ignore;
            this.is_connected = true;
            this.is_connecting = false;
            this.emit('online');
        };

        socket.onerror = (err) => {
            console.log('Error', err);
            this.is_connected = false;
            this.is_connecting = false;
            this.socket.onopen = ignore;
            this.socket.onerror = ignore;
            this.socket.onmessage = ignore;

            setTimeout(() => {
                this.connect();
            }, 5000);
        };

        socket.onmessage = (ev) => {
            const data = ev.data;
            const msg = JSON.parse(data);
            this.handleMessage(msg);
        };

        socket.onclose = () => {
            this.socket.onmessage = ignore;
            this.is_connected = false;
            this.emit('offline');
            this.connect();
        };

        this.socket = socket;
    }

    disconnect() {
        if (this.socket) {
            this.socket.close();
        }
        this.is_connected = false;
    }

    send(msg) {
        if (this.is_connected && this.socket) {
            this.socket.send(JSON.stringify(msg));
        }
    }

    handleMessage(msg) {
        const msgType = msg.type;
        if (msgType) {
            this.emit(msgType, msg);
        }
    }
}

export default Socket;
