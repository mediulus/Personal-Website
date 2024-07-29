const Home = () => {
    return (  
        <div className="home-info">
            <div className="welcome">
                <h1>Welcome to our VCF File Handling Tool!</h1>
                <p className="welcome-message">
                    This innovative tool is designed to streamline the processing and indexing of VCF files using RLZ compression, making it easier for researchers and bioinformaticians to manage and analyze their genetic data. This project aims to make the tool accessible to the broader community, providing a valuable resource for handling VCF files without decompression.
                </p>
            </div>

            <div className="about">
                <div className="features">
                    <h2>Features of the Interface</h2>
                    <ol>
                        <li>
                            <h4>Indexing:</h4>
                            <ul>
                                <li>Users provide a directory containing VCF files.</li>
                                <li>The system builds an index from these files.</li>
                                <li>A log window displays messages from the indexing process, indicating success or failure.</li>
                            </ul>
                        </li>

                        <li>
                            <h4>Searching:</h4>
                            <ul>
                                <li>Users select a directory with a pre-built index.</li>
                                <li>Users can input search patterns.</li>
                                <li>The system presents results with snippets around the matches.</li>
                                <li>Advanced features like clustering answers with similar contexts around matches are available.</li>
                            </ul>
                        </li>

                        <li>
                            <h4>Browsing:</h4>
                            <ul>
                                <li>Users can view the full text of an allele of a chromosome of a sample.</li>
                                <li>The system displays a text window for browsing.</li>
                                <li>Users can save the window content as a text file.</li>
                                <li>The interface lists all samples in the VCF file, allowing users to select a sample and then choose from the available chromosomes.</li>
                            </ul>
                        </li>

                    </ol>
                </div>
            </div>


        </div>
    );  
}
 
export default Home;