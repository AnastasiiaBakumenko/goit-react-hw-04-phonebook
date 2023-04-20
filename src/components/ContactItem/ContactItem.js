import PropTypes from 'prop-types';
import { Item, Button, Span } from './ContactItem.styled';

export function ContactItem({name, number}) {
    return (
        <Item>{name}: <Span>{number}</Span>
            <Button type='button' name={name}>Delete</Button>
        </Item>
    );
};

ContactItem.propTypes = {
    name: PropTypes.string,
    number: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired,
    ]),
}