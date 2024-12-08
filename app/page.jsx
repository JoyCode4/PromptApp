import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Discover & Share
            <br className="max-md:hidden"/>
            <span className="orange_gradient text-center">AI-Powered Prompts</span>
        </h1>
        <p className="desc text-center">
        Artificial Intelligence (AI) is transforming industries by automating tasks, enhancing decision-making, and enabling innovations like chatbots and predictive analytics. While AI offers immense potential in fields like healthcare and finance, it also raises ethical concerns about bias and privacy.
        </p>

        {/* Feed Component */}
        <Feed/>

    </section>
  )
}

export default Home