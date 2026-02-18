'use client';

import { useQueryState, parseAsString } from 'nuqs';

export default function Search() {
    const [search, setSearch] = useQueryState('q', parseAsString.withDefault('').withOptions({ 
        throttleMs: 200,
        shallow: true,
        history: 'replace'
    }));

    return (
        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-2 mb-8 bg-gray-50 dark:bg-gray-900/50">
            <input 
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value || null)}
                placeholder="Search posts..."
                className="w-full bg-transparent outline-none px-2 text-sm placeholder:text-gray-500"
            />
        </div>
    )
}
