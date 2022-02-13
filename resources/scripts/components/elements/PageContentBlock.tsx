import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ContentContainer from '@/components/elements/ContentContainer';
import { CSSTransition } from 'react-transition-group';
import tw from 'twin.macro';
import FlashMessageRender from '@/components/FlashMessageRender';

export interface PageContentBlockProps {
    title?: string;
    className?: string;
    showFlashKey?: string;
}

const PageContentBlock: React.FC<PageContentBlockProps> = ({ title, showFlashKey, className, children }) => {
    useEffect(() => {
        if (title) {
            document.title = title;
        }
    }, [ title ]);

    return (
        <CSSTransition timeout={150} classNames={'fade'} appear in>
            <>
                <ContentContainer css={tw`my-4 sm:my-10`} className={className}>
                    {showFlashKey &&
                    <FlashMessageRender byKey={showFlashKey} css={tw`mb-4`}/>
                    }
                    {children}
                </ContentContainer>
                <ContentContainer css={tw`mb-4`}>
                    <p css={tw`text-center text-neutral-500 text-xs`}>
                        &copy; 2011 - {(new Date()).getFullYear()}&nbsp;
                        <a
                            rel={'noopener nofollow noreferrer'}
                            href={'https://www.beastnode.com/'}
                            target={'_blank'}
                            css={tw`no-underline text-neutral-500 hover:text-neutral-300`}
                        >
                            BeastNode, LLC
                        </a>
                    </p>
                    <ContentContainer css={tw`mt-4 items-center justify-center flex`}>
                        <Link to={{ pathname: 'https://beastnode.com/discord' }} target={'_blank'}>
                            <img src={'https://discord.com/api/guilds/276875371876712448/widget.png?style=banner3'} alt={'beastnode_invite'}/>
                        </Link>
                    </ContentContainer>
                </ContentContainer>
            </>
        </CSSTransition>
    );
};

export default PageContentBlock;
