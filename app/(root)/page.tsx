import Image from "next/image";
import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({searchParams} : {SearchParams: Promise<{query?: string}> }) {
  const query = (await searchParams).query;
  const posts = [{
    _createdAt: new Date(),
    views: 55,
    author: { _id: 1, name : "nakul" },
    _id: 1,
    description: "This is de=iscription",
    image : "https://www.teslaoracle.com/wp-content/uploads/2024/09/Tesla-We-Robot-10-10-Invite-Email.jpeg",
    category: "Robots",
    title: "We Robots",
  },]
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Yor Startup, <br />
          Connect With Entrepreneurs
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
         Competitions.
        </p>

        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : 'All Startups'}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType) => (
              <StartupCard key={post?._id} post={post}/> 
            ))
          ) : (
            <p className="no-results">No Startup found</p>
          )}
        </ul>
      </section>
    </>
  );
}
