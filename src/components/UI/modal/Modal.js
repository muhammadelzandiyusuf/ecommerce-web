import React from 'react';
import '../../../assets/sass/modal.sass';
import {
    EmailShareButton,
    FacebookShareButton,
    InstapaperShareButton,
    LineShareButton,
    LinkedinShareButton,
    LivejournalShareButton,
    MailruShareButton,
    OKShareButton,
    PinterestShareButton,
    PocketShareButton,
    RedditShareButton,
    TelegramShareButton,
    TumblrShareButton,
    TwitterShareButton,
    ViberShareButton,
    VKShareButton,
    WhatsappShareButton,
    WorkplaceShareButton,
    EmailIcon,
    FacebookIcon,
    InstapaperIcon,
    LineIcon,
    LinkedinIcon,
    LivejournalIcon,
    MailruIcon,
    OKIcon,
    PinterestIcon,
    PocketIcon,
    RedditIcon,
    TelegramIcon,
    TumblrIcon,
    TwitterIcon,
    ViberIcon,
    VKIcon,
    WhatsappIcon,
    WorkplaceIcon
} from "react-share";

const Modal = props => {

    const { shareUrl, title, close } = props;

    return (
        <div className="modal">
            <div className="back">
                <i className="fas fa-times" onClick={close}></i>
            </div>
            <div className="content">
                <EmailShareButton url={shareUrl} quote={title}>
                    <EmailIcon size={60} round />
                </EmailShareButton>
                <FacebookShareButton url={shareUrl} quote={title}>
                    <FacebookIcon size={60} round />
                </FacebookShareButton>
                <InstapaperShareButton url={shareUrl} quote={title}>
                    <InstapaperIcon size={60} round />
                </InstapaperShareButton>
                <LineShareButton url={shareUrl} quote={title}>
                    <LineIcon size={60} round />
                </LineShareButton>
                <LinkedinShareButton url={shareUrl} quote={title}>
                    <LinkedinIcon size={60} round />
                </LinkedinShareButton>
                <LivejournalShareButton url={shareUrl} quote={title}>
                    <LivejournalIcon size={60} round />
                </LivejournalShareButton>
                <MailruShareButton url={shareUrl} quote={title}>
                    <MailruIcon size={60} round />
                </MailruShareButton>
                <OKShareButton url={shareUrl} quote={title}>
                    <OKIcon size={60} round />
                </OKShareButton>
                <PinterestShareButton url={shareUrl} quote={title}>
                    <PinterestIcon size={60} round />
                </PinterestShareButton>
                <PocketShareButton url={shareUrl} quote={title}>
                    <PocketIcon size={60} round />
                </PocketShareButton>
                <RedditShareButton url={shareUrl} quote={title}>
                    <RedditIcon size={60} round />
                </RedditShareButton>
                <TelegramShareButton url={shareUrl} quote={title}>
                    <TelegramIcon size={60} round />
                </TelegramShareButton>
                <TumblrShareButton url={shareUrl} quote={title}>
                    <TumblrIcon size={60} round />
                </TumblrShareButton>
                <TwitterShareButton url={shareUrl} quote={title}>
                    <TwitterIcon size={60} round />
                </TwitterShareButton>
                <ViberShareButton url={shareUrl} quote={title}>
                    <ViberIcon size={60} round />
                </ViberShareButton>
                <VKShareButton url={shareUrl} quote={title}>
                    <VKIcon size={60} round />
                </VKShareButton>
                <WhatsappShareButton url={shareUrl} quote={title}>
                    <WhatsappIcon size={60} round />
                </WhatsappShareButton>
                <WorkplaceShareButton url={shareUrl} quote={title}>
                    <WorkplaceIcon size={60} round />
                </WorkplaceShareButton>
            </div>
        </div>
    );
}

export default Modal;