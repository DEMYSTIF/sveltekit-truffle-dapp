<script>
    export let form;
    const result = JSON.parse(form.result);

    const openInIPFS = () => {
        window.open(`http://127.0.0.1:8080/ipfs/${result.document}`, "_blank");
    };
</script>

<div>
    <section>
        <h1>Certificate Details</h1>
        <p>Name: <b>{result.candidateName}</b></p>
        <p>Course: <b>{result.courseName}</b></p>
        <p>Grade: <b>{result.grade}</b></p>
        <p>Date: <b>{result.date}</b></p>
        <button on:click={openInIPFS}>View Document on IPFS</button>
    </section>
</div>
