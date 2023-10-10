import { useState } from "react";
import "./Blog.css";
import { PostsList } from "./PostsList";
import * as Consts from "./Consts";
import { PostEditor } from "./PostEditor";

export function Blog(props) {
	const [posts, setPosts] = useState(mockPosts);
	const [view, setView] = useState(Consts.LIST);

	function onClickHandler() {
		setView(Consts.EDITOR);
	}

	if (view === Consts.EDITOR) {
		return <PostEditor />;
	}

	return (
		<>
			<button onClick={onClickHandler}> Add Post</button>
			<PostsList posts={posts} />
		</>
	)
}

const mockPosts = [
	{
		id: "2",
		date: "2019-08-23T18:25:43.5112",
		title: "Some notes from me",
		body: "è un testo segnaposto utilizzato nel settore della tipografia e della stampa,è un testo segnaposto utilizzato nel settore della tipografia e della stampa, è un testo segnaposto utilizzato nel settore della tipografia e della stampa",
	},

	{
		id: "1",
		date: "2019-09-24T20:26:33.5112",
		title: "To be or not to be",
		body: "È universalmente riconosciuto che un lettore che osserva il layout di una pagina viene distratto dal contenuto testuale se questo è leggibile",
	},
];
