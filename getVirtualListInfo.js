function getVirtualListInfo({
    total,
    itemHeight,
    containerHeight,
    scrollTop,
    buffer = 5
}) {
    const visibleCount = Math.ceil(containerHeight / itemHeight);
    const startIndex = Math.max(
        0,
        Math.floor(scrollTop / itemHeight) - buffer
    );
    const endIndex = Math.min(
        total - 1,
        startIndex + visibleCount + buffer * 2
    );
    const offsetY = startIndex * itemHeight;
    return {
        startIndex,
        endIndex,
        offsetY,
        visibleCount
    }
};

function VirtualList({ list, itemHeight, containerHeight }) {
    const [scrollTop, setScrollTop] = React.useState(0);
    const { startIndex, endIndex, offsetY } = getVirtualListInfo({
        total: list.length,
        itemHeight,
        containerHeight,
        scrollTop
    });
    const visibleList = list.slice(startIndex, endIndex + 1);
    return (
        <div
            style={{ height: containerHeight, overflow: "auto" }}
            onScroll={(e) => setScrollTop(e.currentTarget.scrollTop)}
        >
            <div style={{ height: list.length * itemHeight, position: "relative" }}>
                <div style={{ transform: `translateY(${offsetY}px)` }}>
                    {visibleList.map((item) => (
                        <div key={item.id} style={{ height: itemHeight }}>
                            {item.text}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
