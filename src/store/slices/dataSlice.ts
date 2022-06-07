import { createSlice } from '@reduxjs/toolkit';
import { IData } from '../../interfaces/DataInterface';
import data from '../../utils/data';

const initialState: IData[] = data;

const dataSlice = createSlice({
  name: 'dataSlice',
  initialState: { data: initialState },
  reducers: {
    incrementVote: (state, action) => {
      state.data = state.data.map((suggestion) => {
        if (suggestion.id === action.payload) {
          return { ...suggestion, votes: suggestion.votes + 1 };
        }

        return suggestion;
      });
    },

    sortData: (state, action) => {
      const { payload } = action;

      switch (payload) {
        case 'most upvotes':
          state.data = state.data.sort((a, b) => b.votes - a.votes);
          break;

        case 'least upvotes':
          state.data = state.data.sort((a, b) => a.votes - b.votes);
          break;

        case 'most comments':
          state.data = state.data.sort(
            (a, b) =>
              b.comments.length +
              b.comments.reduce((acc, curr) => acc + curr.replies.length, 0) -
              (a.comments.length +
                a.comments.reduce((acc, curr) => acc + curr.replies.length, 0))
          );
          break;

        case 'least comments':
          state.data = state.data.sort(
            (a, b) =>
              a.comments.length +
              a.comments.reduce((acc, curr) => acc + curr.replies.length, 0) -
              (b.comments.length +
                b.comments.reduce((acc, curr) => acc + curr.replies.length, 0))
          );
          break;

        default:
          // eslint-disable-next-line no-self-assign
          state.data = state.data;
      }
    },

    addSuggestion: (state, action) => {
      state.data.push(action.payload);
    },

    toggleReplyField: (state, action) => {
      state.data = state.data.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            comments: item.comments.map((item2) => {
              if (item2.userName === action.payload.userName) {
                return { ...item2, showReplyField: !item2.showReplyField };
              }

              return item2;
            }),
          };
        }

        return item;
      });
    },

    addComment: (state, action) => {
      state.data = state.data.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            comments: [...item.comments, action.payload.comment],
          };
        }

        return item;
      });
    },

    addReply: (state, action) => {
      state.data = state.data.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            comments: item.comments.map((item2) => {
              if (item2.userLogin === action.payload.userLogin) {
                return {
                  ...item2,
                  showReplyField: false,
                  replies: [...item2.replies, action.payload.data],
                };
              }

              return item2;
            }),
          };
        }
        return item;
      });
    },

    deleteSuggestion: (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload);
    },

    editSuggestion: (state, action) => {
      state.data = state.data.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            title: action.payload.title,
            category: action.payload.category,
            status: action.payload.status,
            detail: action.payload.detail,
          };
        }

        return item;
      });
    },
  },
});

export const {
  incrementVote,
  sortData,
  addSuggestion,
  addComment,
  toggleReplyField,
  addReply,
  editSuggestion,
  deleteSuggestion,
} = dataSlice.actions;

export default dataSlice.reducer;
