import React from 'react';
import categories from '../../utils/categories';
import Category from '../Category';
import { Container } from './styles';

type CategorySelectProps = {
    categorySelected: number;
    setCategory: (categoryId: number) => void;
    hasCheckBox?: boolean;
};

export default function CategorySelect({ categorySelected, setCategory, hasCheckBox }: CategorySelectProps) {
    const containerAttributes = {
        horizontal: true,
        showsHorizontalScrollIndicator: false,
        contentContainerStyle: { paddingRight: 40 },
    };

    return (
        <Container {...containerAttributes}>
            {categories.map((category) => (
                <Category
                    key={category.id}
                    title={category.title}
                    icon={category.icon}
                    checked={category.id === categorySelected}
                    onPress={() => setCategory(category.id)}
                    hasCheckBox={hasCheckBox}
                />
            ))}
        </Container>
    );
}

CategorySelect.defaultProps = {
    hasCheckBox: false,
};
