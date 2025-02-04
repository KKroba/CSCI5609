<script>
    let remainingClicks = 5;
    
    function handleButtonClick() {
        if (remainingClicks <= 0) {
            alert("No more clicks remaining!");
            return;
        }
        remainingClicks--;
    }
    function updateMaxClicks(event) {
        remainingClicks = Number(event.target.value);
    }
</script>
<div class="container">
    <img src="CATCAT.jpg" alt="cat" class="cat-pic">
    
    <div class="click-box" on:click={handleButtonClick}>
        Clicks left: {remainingClicks}
    </div>
    <div class="settings">
        Max clicks: 
        <select on:change={updateMaxClicks}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
        </select>
    </div>
</div>
<style>
    .container {
        text-align: center;
        margin-top: 40px;
    }
    .cat-pic {
        width: 200px;
        margin-bottom: 20px;
    }
    .click-box {
        background: #44aa66;
        font-size: xx-large;
        border: 2px solid black;
        padding: 10px 20px;
        margin: 15px auto;
        display: inline-block;
        cursor: pointer;
    }
    .settings {
        margin-top: 20px;
    }
</style>