<script>
    let clicks = 5;  // 剩余点击次数
    
    function handleClick() {
        if(clicks <= 0) {
            alert("No more clicks remaining!");
            return;
        }
        clicks--;
    }
    
    function changeMax() {
        let max = Number(document.getElementById('maxSelect').value);
        clicks = max;
    }
</script>

<div class="counter">
    <img class="logo" src="click.jpg" alt="logo">
    
    <div class="btn" on:click={handleClick}>
        Clicks left: {clicks}
    </div>

    <div>
        Max clicks: 
        <select id="maxSelect" on:change={changeMax}>
            <option>5</option>
            <option>10</option>
            <option>15</option>
        </select>
    </div>
</div>

<style>
    .counter {
        text-align: center;
        margin-top: 50px;
    }
    .btn {
        background: #44aa66;
        font-size: xx-large;
        padding: 10px;
        cursor: pointer;
        border: 2px solid black;
        display: inline-block;
        margin: 15px 0;
    }
    .logo {
        width: 150px;
    }
</style>