"use client";

import styles from './searchBar.module.css';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

function SearchBar() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Handle search logic here
    };

    return (
        <form onSubmit={handleSubmit} className={styles.searchForm}>
            <Input type="text" placeholder="Search..." className={styles.searchInput} />
            <Button type="submit" className={styles.searchButton} variant="ghost"><MagnifyingGlassIcon /></Button>
        </form>
    );
}

export default SearchBar;