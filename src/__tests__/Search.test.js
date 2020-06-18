import * as React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import SearchBar from '../components/SearchBar.jsx';

describe('SearchBar', () => {
    const onHandleClickMock = jest.fn();
    const props = { handleSearch: () => onHandleClickMock('Arg')};
    const wrapper = shallow(<SearchBar {...props} />)

    describe('Should pass on start.', () => {
        it('Should render correctly.', () => {
            const tree = renderer
                .create(<SearchBar {...props} />)
                .toJSON();
        expect(tree).toMatchSnapshot();
        });

        it('Should call "handleSearch" when write a city name.', () => {
            wrapper.find("[type='text']").simulate('change');
        expect(onHandleClickMock).toHaveBeenCalled();
        });
    });
});