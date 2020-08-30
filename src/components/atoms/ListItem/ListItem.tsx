import React, { Ref } from 'react';
import styles from './ListItem.module.css';

interface ListItemProps {
	text: string;
}

const ListItem: React.ForwardRefExoticComponent<
	ListItemProps & React.RefAttributes<HTMLLIElement>
> = React.forwardRef<HTMLLIElement, ListItemProps>(
	({ text }, ref?: Ref<HTMLLIElement>) => (
		<li ref={ref} className={styles.item}>
			{text}
		</li>
	)
);

export default ListItem;
