import * as C from './styles';
import { Item } from '../../types/item';

type Props = {
    item: Item
}

export const ListItem = ({ item }: Props ) => {
    return (
        <C.Container>
            <input type="checkbox" />
            <label htmlFor="">{item.name}</label>
        </C.Container>
    );
}