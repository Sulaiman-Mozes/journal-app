import JournalReducer from '../../reducers/journalReducer';
import initialState from '../../reducers/initialState';
import * as journalActions from '../../actions/journals';

describe('Test Journal Reducer', () => {
  const state = initialState.journals;

  test('GET_NOTES_REQUEST action', () => {
    expect(JournalReducer(state,
      journalActions.getNotesRequest()))
      .toEqual({ ...state, list: { ...state.list, loading: true } });
  });

  test('GGET_NOTES_FAILED action', () => {
    expect(JournalReducer(state,
      journalActions.getNotesFailed('error message')))
      .toEqual({ ...state, list: { ...state.list, loading: false, error: 'error message' } });
  });

  test('GET_NOTES_SUCCESSFULL action', () => {
    expect(JournalReducer(state,
      journalActions.getNotesSuccessful([])))
      .toEqual({
        ...state,
        list: {
          ...state.list, loading: false, notes: [],
        },
      });
  });

  test('SET_UPDATE_SUCCEESS_TO_FALSE action', () => {
    expect(JournalReducer(state,
      journalActions.setUpdateSuccessToFalse()))
      .toEqual({ ...state, update: { ...state.update, updateSuccess: false } });
  });

  test('UPDATE_NOTE_REQUEST action', () => {
    expect(JournalReducer(state,
      journalActions.updateNoteRequest()))
      .toEqual({ ...state, update: { ...state.update, loading: true } });
  });

  test('UPDATE_NOTE_SUCCESSFULL action', () => {
    expect(JournalReducer(state,
      journalActions.updateNoteSuccessful()))
      .toEqual({ ...state, update: { ...state.update, updateSuccess: true, loading: false } });
  });

  test('UPDATE_NOTE_FAILED action', () => {
    expect(JournalReducer(state,
      journalActions.updateNoteFailed()))
      .toEqual({ ...state, update: { ...state.update, loading: false } });
  });

  test('When No Action is Passed', () => {
    expect(JournalReducer(state, { action: { type: '' } }))
      .toEqual({ ...state });
  });

  test('ADD_NOTE_FAILED action', () => {
    expect(JournalReducer(state,
      journalActions.addNoteFailed('error message')))
      .toEqual({ ...state, add: { ...state.add, loading: false, error: 'error message' } });
  });

  test('DELETE_NOTE_SUCCESSFULL action', () => {
    expect(JournalReducer({ ...state, list: { ...state.list, notes: [{ _id: '63q4yew8943u29r0-i2948qwe' }] } },
      journalActions.deleteNoteSuccessful('63q4yew8943u29r0-i2948qwe')))
      .toEqual({
        ...state,
        list: {
          ...state.list, notes: [],
        },
      });
  });

  test('UPDATE_DATA action', () => {
    expect(JournalReducer(state,
      journalActions.updateData({})))
      .toEqual({ ...state, data: {} });
  });

  test('ADD_NOTE_REQUEST action', () => {
    expect(JournalReducer(state,
      journalActions.addNoteRequest()))
      .toEqual({ ...state, add: { ...state.add, loading: true, error: '' } });
  });

  test('ADD_NOTE_SUCCESSFULL action', () => {
    expect(JournalReducer(state,
      journalActions.addNoteSuccessful({})))
      .toEqual({
        ...state,
        add: { ...state.add, loading: false },
        list: { ...state.list, notes: [...state.list.notes, {}] },
      });
  });
});
