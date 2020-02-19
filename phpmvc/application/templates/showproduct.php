<?php 
    $product = $datas;
?>
<div class="mt-5">
    <h3>Détail de l'article</h3>
</div>
<div class="mt-5">
    <h2>Name : <?php echo $product->name; ?></h2>
    <p>Description : <?php echo $product->description; ?></p>
    <p>Prix : <?php echo $product->price; ?> euros</p>
    <p><img src="public/img/<?php echo $product->image; ?>" alt="image"></p>
    <p>Category : <?php echo $product->category_id; ?></p>
    
</div>