import {Avatar, Card, IconButton} from "@mui/material";
import {Icon} from "@vaadin/react-components";
import StoryCircleView from "Frontend/views/storys/storycircle";
import PostCardView from "Frontend/views/posts/postcard";
import {ViewConfig} from '@vaadin/hilla-file-router/types.js';
import CreatePostModal from "Frontend/views/posts/createpostmodal";
import {useState} from "react";

export const config: ViewConfig = {
    menu: {exclude: true},
};

export default function MiddlePartView() {
    const story = [1, 1, 1, 1];
    const posts = [1,1,1,1,1];
    const [openCreatePostModal, setOpenCreatePostModal] = useState(false);
    const handleCloseCreatePostModal=()=> setOpenCreatePostModal(false);

    const handleOpenCreatePostModal = () => {
        setOpenCreatePostModal(true);
        console.log("open post model...")
    }

    return (
        <>
        <div className="px-20 mt-5">
            {/* ######: Story circle section */}
            <section className=" flex items-center p-5 roundded-b-md">
                {/*___: Add "add" story circle */}
                <div className="flex flex flex-col items-center mr-4 cursor-pointer" style={{marginTop: "20px"}}>
                    <Avatar sx={{width: "3rem", height: "3rem"}}
                            className="flex flex-col items-center mr-4 cursor-pointer">
                        <Icon icon="vaadin:plus"></Icon>
                    </Avatar>
                    <p>New</p>
                    {/*___: Add story circles */}
                </div>
                {story.map((item) => <StoryCircleView></StoryCircleView>)}
            </section>

            {/* ######: Card for posting  */}
            <Card className="p-5 mt-5">
                {/*___: Add avatar and input field into card */}
                <div className="flex justify-between">
                    <Avatar/>
                    {/*___: when input field is clicked, open postmodal */}
                    <input readOnly
                           onClick={handleOpenCreatePostModal}
                           className="outline-none w-[90%] rounded-full px-5 bg-transparent border-[#3b4054] border"
                           type="text" placeholder="Crete new post..."/>
                </div>
                {/*___: Add image into card */}
                <div className="flex justify-center space-x-9 mt-5">
                    <div className="items-center">
                        <IconButton color="primary" onClick={handleOpenCreatePostModal}>
                            <Icon style={{padding: '0.5em'}} icon="vaadin:picture" slot="prefix"></Icon>
                        </IconButton>
                        <span>image</span>
                    </div>
                    {/*___: Add video into card */}
                    <div className="items-center">
                        <IconButton color="primary" onClick={handleOpenCreatePostModal}>
                            <Icon style={{padding: '0.5em'}} slot="prefix" icon="vaadin:file-start"></Icon>
                        </IconButton>
                        <span>video</span>
                    </div>
                    {/*___: Add write article into card */}
                    <div className="items-center">
                        <IconButton color="primary" onClick={handleOpenCreatePostModal}>
                            <Icon style={{padding: '0.5em'}} slot="prefix" icon="vaadin:edit"></Icon>
                        </IconButton>
                        <span>Write article</span>
                    </div>
                </div>
            </Card>

            {/* ######: Add multiple PostCardViews*/}
            <div className="mt-5 space-y-5">
                {posts.map((item) => <PostCardView/>)}
            </div>
            {/* when input field is clicked, open post modal*/}
            <div>
                <CreatePostModal open={openCreatePostModal} handleClose={handleCloseCreatePostModal}/>
            </div>
        </div>
            </>
    );
}