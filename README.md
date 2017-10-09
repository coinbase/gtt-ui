*Note*: This repo is likely to be broken more often than not as the GTT iterates towards a stable 1.0 API.
You are free to poke around here, but development is currently prioritised on the GTT.

# GDAX Trading Toolkit UI components

This repo is a library of UI components intended to be used to create Front Ends fot the GTT backend.
It's intended to be used as a library rather than a standalone app, so for this reason, there's little
in the way of standalone applications here. However, there is a small demonstration app, as well as a gallery.

## Gallery

To view the gallery locally, run `yarn run storybook` and then open http://localhost:6006

## Demo

You can view a small demo of the gtt and gtt-ui in action.

1. Start the GTT server

       [gtt folder]$ ts-node src/server/server-cli -p 3222

1. Run the client app

        yarn start

1. Open http://localhost:8080 in your browser
