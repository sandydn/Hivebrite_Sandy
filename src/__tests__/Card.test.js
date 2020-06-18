import * as React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Card from '../components/Card.jsx';

describe('Card', () => {
    const onHandleClickMock = jest.fn();

    const props = {
        cityData: { 
            city: 'New York', 
            state: 'New York', 
            rank: '1', 
            growth_from_2000_to_2013: "4.8%", 
            population: "8405837" 
        }, 
        selectedCity: {
            city: "New York",
            growth_from_2000_to_2013: "4.8%",
            latitude: 40.7127837,
            longitude: -74.0059413,
            population: "8405837",
            rank: "1",
            state: "New York",
        },
        handleClick: () => onHandleClickMock('Arg')
    };

    const wrapper = shallow(<Card {...props} />);

    describe('Should pass on start.', () => {
        it('Should render correctly.', () => {
            const tree = renderer
                .create(<Card {...props} />)
                .toJSON();
        expect(tree).toMatchSnapshot();
        });

        it('Should call "onHandleClick" when clicking on the card.', () => {
            wrapper.find("[data-jest='card']").simulate('click');
        expect(onHandleClickMock).toHaveBeenCalled();
        });
    });
});