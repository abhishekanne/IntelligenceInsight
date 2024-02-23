import { createBoard } from '@wixc3/react-board';
import { Activities } from '../../../components/activities/activities';

export default createBoard({
    name: 'Activities',
    Board: () => <Activities />,
    isSnippet: true,
});