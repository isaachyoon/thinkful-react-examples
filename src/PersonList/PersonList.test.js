import React from 'react';
import ReactDOM from 'react-dom';
import PersonList from './PersonList';

import renderer from 'react-test-renderer';

describe('<PersonList />', () => {
  it('PersonList mounts', ()=> {
    const div = document.createElement('div');
    ReactDOM.render(<PersonList/>, div);
    ReactDOM.unmountComponentAtNode(div);
  })
  const obj = {id: '001', name: 'Rich'};
  it('matches snapshot', () => {
    const snap = renderer.create(<PersonList data={obj}/>).toJSON();
    expect(snap).toMatchSnapshot();
  });
})