import {fireEvent, screen} from '@testing-library/react';
import {Sidebar} from 'widgets/Sidebar/ui/Sidebar/Sidebar';
import {componentRender} from 'shared/lib/tests/componentRender/componentRender';

describe('sidebar', () => {
  test('test', () => {
    componentRender(<Sidebar/>);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('test toggle', () => {
    componentRender(<Sidebar/>);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
