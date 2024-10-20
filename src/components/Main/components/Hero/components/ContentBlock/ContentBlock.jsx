import Header from './components/Header';
import Text from './components/Text';
import JoinedCommunicate from './components/JoinedCommunicate';
import { SignedIn, SignedOut, SignUpButton } from '@clerk/clerk-react'

import './styles/ContentBlock.css';

const ContentBlock = () => {
    return (
        <section className='contentBlock'>
            <Header />
            <Text />
        <SignedOut>
          <SignUpButton />
        </SignedOut>
        <SignedIn>
          <JoinedCommunicate />
        </SignedIn>
        </section>
    );
}

export default ContentBlock;
