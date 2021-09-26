import {
    GET_EVENTS,
    GET_EVENTS_AGENDA,
    GET_EVENTS_PINNED,
} from '../actions/eventsActions.js';

const inialState = {
    events: {},
    eventsAgenda: [],
    pinnedEvents: [],
};

const eventsReducer = (state = inialState, action) => {
    switch (action.type) {
        case GET_EVENTS:
            return { ...state, events: action.payload };
        case GET_EVENTS_AGENDA:
            return { ...state, eventsAgenda: action.payload };
        case GET_EVENTS_PINNED:
            return { ...state, pinnedEvents: action.payload };
        default:
            return state;
    }
};

export default eventsReducer;
