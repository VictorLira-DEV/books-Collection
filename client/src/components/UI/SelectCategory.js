import styles from '../../styles/UI/SelectCategory/SelectCategory.module.css'

const SelectCategory = (props) => {
    return(
        <article className={styles.select}>
                <select name={props.name} onChange={props.onChange} value={props.value}>
                    <option value="" selected disabled>
                        Categories
                    </option>
                    <option value="Antiques">Antiques</option>
                    <option value="Apparel">Apparel</option>
                    <option value="Automotive">Automotive</option>
                    <option value="Beauty">Beauty</option>
                    <option value="Books">Books</option>
                    <option value="Business">Business</option>
                    <option value="Cameras & Photography">Cameras & Photography</option>
                    <option value="Collectibles">Collectibles</option>
                    <option value="Computer Hardware & Accessories">Computer Hardware & Accessories</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Gifts & Flowers">Gifts & Flowers</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Hobbies">Hobbies</option>
                    <option value="Toys & Games">Toys & Games</option>
                    <option value="Home & Garden">Home & Garden</option>
                    <option value="Media & Entertainment">Media & Entertainment</option>
                    <option value="Pets & Animals">Pets & Animals</option>
                    <option value="Software">Software</option>
                    <option value="Sports & Recreation">Sports & Recreation</option>
                    <option value="Travel Store">Travel Store</option>
                    <option value="Digital Goods">Digital Goods</option>
                </select>
            </article>


    )
}

export default SelectCategory;