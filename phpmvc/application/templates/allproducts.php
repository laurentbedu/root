<table class="table">
    <thead>
        <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Prix</th>
            <th>Image</th>
            <th>Catégorie</th>
            <!-- <th>Action</th> -->
        </tr>
    </thead>
    <tbody>
        <?php foreach ($datas as $product) {?>
        <tr>
            <td><?= $product -> name ?></td>
            <td><?= $product -> description ?></td>
            <td><?= $product -> price ?></td>
            <td>
                <img src="<?= 'public/img/'.$product->image  ?>" alt="<?php echo $product->image?>">
            </td>
            <td><?= $product -> category_id ?></td>
            
        </tr>
        <?php } ?>
    </tbody>
</table>