import {Stomp} from "@stomp/stompjs/esm5/compatibility/stomp";

export const Client = Stomp.client("ws://localhost:8090/poker");

export const connect_callback = function () {
    // called back after the client is connected and authenticated to the STOMP server
};

export const error_callback = function (error) {
    // display the error's message header:
    alert(error.headers.message);
};