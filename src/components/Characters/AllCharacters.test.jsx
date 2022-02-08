import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router';
import AllCharacters from './AllCharacters'

it('should render characters', () => {
    const { container } = render(
    <MemoryRouter> 
    <AllCharacters characters={[    
    {
    name: 'Sarani',
    id: 1,
    image:'https://place-puppy.com/'
}
    ]}/>
    </MemoryRouter> 
    );
    expect(container).toMatchSnapshot();
})