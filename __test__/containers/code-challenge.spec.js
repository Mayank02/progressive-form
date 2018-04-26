import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
// import configureStore from 'redux-mock-store';
// import {Provider} from 'react-redux';

// import {createStore} from 'redux';

import {codeChallenge} from '../../src/app/containers/code-challenge';

describe('Code challenge snapshot', () => {
    it('+++capturing Snapshot of code challenge ', () => {
        const renderedValue =  renderer.create(<codeChallenge />).toJSON();
        expect(renderedValue).toMatchSnapshot();
    });
});

describe('Code challenge shallow Render REACT COMPONENTS', () => {
    let wrapper;

    fit('+++ render the DUMB component', () => {
        wrapper = shallow(<codeChallenge />);
        console.log('------------------', wrapper);
        expect(wrapper).toBeDefined();
    });
});
