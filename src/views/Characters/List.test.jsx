import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import App from '../../App'
import { CharacterProvider } from '../../context/CharacterContext';

const server = setupServer(
    rest.get('https://futuramaapi.herokuapp.com/api/v2/characters', (req, res, ctx) => {
        return res(
            ctx.json({ 
                    "Species": "Human",
                    "Age": "25- 41 (chronologically 2×1040 (Due to the time travel))",
                    "Planet": "Earth",
                    "Profession": "Currently: Intergalactic delivery boyFormerly: Pizza delivery boy, emperor, pope, slave, cryogenics administrator, captain, first-mate, animal trainer, holophone player, holophone composer, police officer, soldierAs Lars: Head tank feeder",
                    "Status": "Alive",
                    "FirstAppearance": "\"Space Pilot 3000\"",
                    "PicUrl": "https://vignette.wikia.nocookie.net/en.futurama/images/f/f2/PhilipJ.Fry.png/revision/latest?cb=20110916120042",
                    "Relatives": "Philip J. Fry I,Turanga Leela,Kif Kroker's offspring,Yancy Fry Sr.,Yancy Fry Sr.,Mrs. Fry,Yancy Fry,Mildred Fry,Enos Fry,Philip J. Fry II",
                    "VoicedBy": "Billy West Iván Muelas (Spain)",
                    "Name": "Sarani"
            })
        )
    })
)

describe('Character List Page', () => {
    beforeAll(() => {
        server.listen();
    });
    afterAll(() => {
        server.close();
    });

    it('should render character list', async () => {
        render(
            <CharacterProvider>
            <MemoryRouter initialEntries={['/characters']}>
                <App />
            </MemoryRouter>
            </CharacterProvider>
        );
        screen.getByText('Characters')
        waitFor(() => {
            screen.getByText('Sarani');
        })
    } )
})