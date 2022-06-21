import React, { ReactNode } from 'react';
import { Modal, ModalProps, TouchableWithoutFeedback } from 'react-native';

import { Bar, Container, Overlay } from './styles';

import Background from '../Background';

type ModalViewProps = ModalProps & {
    children: ReactNode;
    closeModal: () => void;
};

export default function ModalView({ children, closeModal, ...rest }: ModalViewProps) {
    return (
        <Modal transparent animationType="slide" statusBarTranslucent {...rest}>
            <TouchableWithoutFeedback onPress={closeModal}>
                <Overlay>
                    <Container>
                        <Background>
                            <Bar />
                            {children}
                        </Background>
                    </Container>
                </Overlay>
            </TouchableWithoutFeedback>
        </Modal>
    );
}
