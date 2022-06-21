import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg';

import { CheckBox, Container, Content, Title } from './styles';

type CategoryProps = RectButtonProps & {
    title: string;
    icon: React.FC<SvgProps>;
    hasCheckBox?: boolean;
    checked: boolean;
};

export default function Category({ title, icon: Icon, hasCheckBox, checked, ...rest }: CategoryProps) {
    return (
        <RectButton {...rest}>
            <Container>
                <Content checked={checked}>
                    {hasCheckBox && <CheckBox checked={checked} />}
                    <Icon width={48} height={48} />
                    <Title>{title}</Title>
                </Content>
            </Container>
        </RectButton>
    );
}

Category.defaultProps = {
    hasCheckBox: false,
};
