import Link from "next/link";
import Image from "next/image";

export default function RecipeCard({ recipe }) {
  const { title, slug, cookingTime, thumbnail } = recipe.fields;

  return (
    <div className="card">
      <div className="featured">
        <Image
          src={"https:" + thumbnail.fields.file.url}
          width="150px"
          height="200px"
        ></Image>
      </div>
      <div className="content">
        <div className="info">
          <h4>{title}</h4>
          <p>Takes approx {cookingTime} minns to make</p>
        </div>
        <div className="actions">
          <Link href={"/recipes/" + slug}>
            <a>cook this </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
