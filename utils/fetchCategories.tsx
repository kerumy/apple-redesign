export const fetchCategories = async () => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/getCategories`
    );

    //https://maku.blog/p/2hr3eqx/
    //上のブログにTypeScriptにおけるjsonと型の関係がわかりやすく書かれている

    const data = await res.json();
    const categories: Category[] = data.categories;

    return categories;
};
