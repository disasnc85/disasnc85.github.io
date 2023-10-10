export function PostsList({ posts }) {
	return (
		<>
			{posts.map((p, i) => (
				<article key={i} className={"Container"}>
					<p className={"Date"}>{p.date} </p>
					<h1>{p.title}</h1>
					<p>{p.body}</p>
				</article>
			))}
		</>
	);
}
