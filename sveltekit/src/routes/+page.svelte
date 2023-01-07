<script>
    const connectToMetaMask = async () => {
        const account = await window.ethereum.request({
            method: "eth_requestAccounts",
        });
        alert("Connected to " + account);
    };
    export let form;
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
            <label for="course">Select Course:</label>
            <select name="course" required>
                <option value="CED">CED</option>
                <option value="CHF">CHF</option>
                <option value="CBA">CBA</option>
            </select>
            <br /><br />
            <label for="grade">Select Grade:</label>
            <select name="grade" required>
                <option value="S">S</option>
                <option value="A">A</option>
                <option value="B">B</option>
            </select>
            <br /><br />
            <label for="date">Date:</label>
            <input type="date" name="date" required />
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
