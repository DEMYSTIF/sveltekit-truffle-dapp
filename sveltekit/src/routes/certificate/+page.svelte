<script>
    export let form;
    const result = JSON.parse(form.result);
</script>

<div>
    <section>
        <h1>Certificate Details</h1>
        <p>Name: <b>{result.candidateName}</b></p>
        <p>Course: <b>{result.courseName}</b></p>
        <p>Grade: <b>{result.grade}</b></p>
        <p>Date: <b>{result.date}</b></p>
    </section>
</div>
