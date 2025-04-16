import { ReactNode } from 'react';
import * as Styled from './styles';

interface BackButtonProps {
    children: ReactNode;
    onClick: () => void;
}

function BackButton({ children, onClick }: BackButtonProps) {
    return (
        <Styled.Button onClick={onClick}>
            {children}
        </Styled.Button>
    );
}

export default BackButton; 