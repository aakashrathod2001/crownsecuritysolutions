"use client";
import React, { useState } from "react";
import styles from "./HeroSearch.module.scss";
import { services } from "@/data/services";
import Link from "next/link";
import { Search } from "lucide-react";

const defaultKeywords = ["Logo Design", "Website Development", "UI/UX Design"];

const HeroSearch = () => {
  const [query, setQuery] = useState("");

  const filteredServices = services.filter((service) =>
    service.name.toLowerCase().includes(query.toLowerCase())
  );

  const resultsToShow =
    query.trim() === ""
      ? services.filter((s) => defaultKeywords.includes(s.name))
      : filteredServices;

  return (
    <div className={styles.wrapper}>
      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Search any service"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button>
          <Search className={styles.searchIcon} />
        </button>
      </div>

      {resultsToShow.length > 0 && (
        <div className={styles.results}>
          {resultsToShow.map((service) => (
            <Link
              href={service.slug}
              key={service.slug}
              className={styles.serviceBtn}
              target="_blank"
            >
              {service.name}
              <span className={styles.arrow}>→</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default HeroSearch;
