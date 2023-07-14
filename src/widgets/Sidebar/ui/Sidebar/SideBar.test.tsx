import {fireEvent, screen} from "@testing-library/react";
import {Sidebar} from "widgets/Sidebar/ui/Sidebar/Sidebar";
import {renderWithTranslation} from "shared/lib/renderWithTranslation/renderWithTranslation";

describe('sidebar', () => {
    test('test', () => {
        renderWithTranslation(<Sidebar/>)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })

    test('test toggle', () => {
        renderWithTranslation(<Sidebar/>)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        const toggleBtn = screen.getByTestId('sidebar-toggle')
        fireEvent.click(toggleBtn)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })
})
