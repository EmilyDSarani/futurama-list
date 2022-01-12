import { render } from '@testing-library/react'
import SingleCharacter from './SingleCharacter'

it('should render character', () => {
    const { container } = render(
    <SingleCharacter character={{
        image: 'https://place-puppy.com/',
        name:'Sarani',
        species:'Humanoid',
        status:'possibly alive'}} />);
    expect(container).toMatchSnapshot();
});