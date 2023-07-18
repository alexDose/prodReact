import {render, screen} from "@testing-library/react";
import {Button, ButtonTheme} from "shared/ui/Button/Button";

describe('button', () => {
    test('test', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument()
    })

    test('class', () => {
        render(<Button className={ButtonTheme.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear')
        screen.debug()
    })
})
