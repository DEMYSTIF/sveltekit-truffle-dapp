<script>
    import { create } from "ipfs-http-client";

    export let form;
    let result;

    const connectToMetaMask = async () => {
        const account = await window.ethereum.request({
            method: "eth_requestAccounts",
        });
        alert("Connected to " + account);
    };

    const uploadToIPFS = async (e) => {
        const file = e.target.files[0];
        const client = create("/ip4/127.0.0.1/tcp/5001");
        result = await client.add(file);
        // console.log(result);
    };
</script>

<div>
    <section>
        <button on:click={connectToMetaMask}>Connect To MetaMask</button>
    </section>
    <section>
        <h1>Issue Certificate</h1>
        <form method="post">
            <label for="certID">Enter ID:</label>
            <input type="text" name="certID" required />
            <br /><br />
            <label for="name">Enter Candidate Name:</label>
            <input type="text" name="name" required />
            <br /><br />
            <label for="course">Course:</label>
            <select name="course" required>
                <option hidden selected>Select Course</option>
                <option value="CBA">CBA</option>
                <option value="CED">CED</option>
                <option value="CHF">CHF</option>
                <option value="CBR">CBR</option>
            </select>
            <br /><br />
            <label for="grade">Grade:</label>
            <select name="grade" required>
                <option hidden selected>Select Grade</option>
                <option value="S">S</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
            </select>
            <br /><br />
            <label for="date">Date:</label>
            <input type="date" name="date" required />
            <br /><br />
            <label for="document">Document:</label>
            <input
                type="file"
                name="document"
                accept=".pdf"
                required
                on:change={uploadToIPFS}
            />
            <br /><br />
            <label for="cid">IPFS CID:</label>
            <input
                type="text"
                name="cid"
                readonly
                size="60"
                value={result ? result.path : null}
            />
            <br /><br />
            <button type="submit">Issue</button>
        </form>
    </section>
    <section>
        {#if form?.success}
            <h4>Issued successfully!!</h4>
            <p>Receipt is: <b>{form.trxHash}</b></p>
        {/if}
    </section>
    <section class="search">
        <h1>Fetch Certificate</h1>
        <form action="/certificate" method="post">
            <input type="text" name="fetchID" />
            <button type="submit">Search</button>
        </form>
    </section>
</div>

<style>
    .search {
        padding-top: 30px;
    }
</style>
