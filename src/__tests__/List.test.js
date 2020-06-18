import * as React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import List from '../components/List.jsx';

describe('List', () => {
  const onHandleClickMock = jest.fn();
  const props = {
      cities : [
        {
            "city": "New York", 
            "growth_from_2000_to_2013": "4.8%", 
            "latitude": 40.7127837, 
            "longitude": -74.0059413, 
            "population": "8405837", 
            "rank": "1", 
            "state": "New York"
        }, 
        {
            "city": "Los Angeles", 
            "growth_from_2000_to_2013": "4.8%", 
            "latitude": 34.0522342, 
            "longitude": -118.2436849, 
            "population": "3884307", 
            "rank": "2", 
            "state": "California"
        }, 
        {
            "city": "Chicago", 
            "growth_from_2000_to_2013": "-6.1%", 
            "latitude": 41.8781136, 
            "longitude": -87.6297982, 
            "population": "2718782", 
            "rank": "3", 
            "state": "Illinois"
        }
    ],
    selectedCity: {
        city: "New York",
        growth_from_2000_to_2013: "4.8%",
        latitude: 40.7127837,
        longitude: -74.0059413,
        population: "8405837",
        rank: "1",
        state: "New York"
    },
    handleMore: () => onHandleClickMock('Arg')
  };
    
    const wrapper = shallow(<List {...props} />);

    describe('Should pass on start.', () => {
        it('Should render correctly.', () => {
            const tree = renderer
                .create(<List {...props} />)
                .toJSON();
        expect(tree).toMatchSnapshot();
        });

        it('Should call "handleMore" when clicking on the button.', () => {
            wrapper.find("[data-jest='button-more']").simulate('click');
        expect(onHandleClickMock).toHaveBeenCalled();
        });
    });
});