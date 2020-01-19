import React from 'react';
import Footer from './Footer';
import VisibleTodoList from '../containers/VisibleTodoList';

interface MainSectionProps {
  todosCount: number;
  completedCount: number;
  actions: any;
}

const MainSection = ({ todosCount, completedCount, actions }: MainSectionProps): React.ReactElement => (
  <section className="main">
    {!!todosCount && (
      <span>
        <input className="toggle-all" type="checkbox" checked={completedCount === todosCount} readOnly />
        <label onClick={actions.completeAllTodos} />
      </span>
    )}
    <VisibleTodoList />
    {!!todosCount && (
      <Footer
        completedCount={completedCount}
        activeCount={todosCount - completedCount}
        onClearCompleted={actions.clearCompleted}
      />
    )}
  </section>
);

export default MainSection;
