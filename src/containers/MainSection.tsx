import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as TodoActions from '../actions';
import MainSection from '../components/MainSection';
import { getCompletedTodoCount, getVisibleTodos } from '../selectors';

const mapStateToProps = (state: any) => ({
  todosCount: state.todos.length,
  completedCount: getCompletedTodoCount(state),
  actions: getVisibleTodos(state),
});

const mapDispatchToProps = (dispatch: any) => ({
  actions: bindActionCreators(TodoActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainSection);
