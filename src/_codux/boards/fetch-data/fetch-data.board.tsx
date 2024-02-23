import { createBoard } from '@wixc3/react-board';
import { FetchData } from '../../../components/fetch-data/fetch-data';

export default createBoard({
    name: 'FetchData',
    Board: () => <FetchData />,
    isSnippet: true,
});