// Do not modify this code
// Add events in the EventRegistry.
class _EventBus 
{
    static #eventChannels = {};

    static publish(eventChannel, event) {
        for (const subscriberEventHandler of this.#eventChannels[eventChannel]) {
            subscriberEventHandler(event);
        }
    }

    static subscribe(eventChannel, eventHandler) {

        if (this.#eventChannels[eventChannel] === undefined) {
            this.#eventChannels[eventChannel] = [];
        }

        this.#eventChannels[eventChannel].push(eventHandler);
    }
}

export default _EventBus;