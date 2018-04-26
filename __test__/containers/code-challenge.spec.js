import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
// import { saveData, resetValidationMessage } from '../actions';
// import { validate } from '../utils/api';

import { CodeChallenge } from '../../src/app/containers/code-challenge';

describe('Code challenge snapshot ', () => {
    it('capturing Snapshot of code challenge ', () => {
        const renderedValue =  renderer.create(<CodeChallenge />).toJSON();
        expect(renderedValue).toMatchSnapshot();
    });
});

describe('Code challenge shallow Render REACT COMPONENTS ', () => {
    let component;
    beforeEach(()=>{
        component = shallow(<CodeChallenge /> );
    });

    it('+++ render the DUMB component', () => {
        expect(component.length).toEqual(1);
    });
});
